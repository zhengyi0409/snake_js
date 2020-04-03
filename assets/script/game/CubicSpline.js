
var TriDiagonalMatrixF = require("../game/TriDiagonalMatrixF");

var CubicSpline = cc.Class({

    ctor: function () {
        this.xOrig = [];
        this.yOrig = [];
        this.a = [];
        this.b = [];
        this._lastIndex = 0;
    },


    FitAndEval: function (x, y, xs, outputCount, xxs, debug) {
        debug = false;
        this.Fit(x, y, debug);
        this.Eval(xs, xxs, debug);
    },

    CheckAlreadyFitted: function(){
        if(this.a.length <= 0){
            return;
        }
    },

    GetNextXIndex(x){
        if (x < this.xOrig[this._lastIndex]) {
            return;
        }
        while ((this._lastIndex < this.xOrig.length - 2) && (x > this.xOrig[this._lastIndex + 1])) {
            this._lastIndex++;
        }
        return this._lastIndex;
    },

    EvalSpline( x, j, debug){
        let dx = this.xOrig[j + 1] - this.xOrig[j];
        let t = (x - this.xOrig[j]) / dx;
        let y = (1 - t) * this.yOrig[j] + t * this.yOrig[j + 1] + t * (1 - t) * (this.a[j] * (1 - t) + this.b[j] * t); // equation 9
        //if (debug) Console.WriteLine("xs = {0}, j = {1}, t = {2}", x, j, t);
        return y;
    },

    Fit:function(x, y, debug){

        this.deepCopy(x,this.xOrig);
        this.deepCopy(y,this.yOrig);

        let n = x.length;
        let r = []; // the right hand side numbers: wikipedia page overloads b
        r.length = n;

        var m = new TriDiagonalMatrixF();
        Utils.resize(m.A,n);
        Utils.resize(m.B,n);
        Utils.resize(m.C,n);

        let dx1;
        let dx2;
        let dy1;
        let dy2;

        // First row is different (equation 16 from the article)
        dx1 = x[1] - x[0];
        m.C[0] = 1.0 / dx1;
        m.B[0] = 2.0 * m.C[0];
        r[0] = 3 * (y[1] - y[0]) / (dx1 * dx1);

        // Body rows (equation 15 from the article)
        for (let i = 1; i < n - 1; i++) {
            dx1 = x[i] - x[i - 1];
            dx2 = x[i + 1] - x[i];

            m.A[i] = 1.0 / dx1;
            m.C[i] = 1.0 / dx2;
            m.B[i] = 2.0 * (m.A[i] + m.C[i]);

            dy1 = y[i] - y[i - 1];
            dy2 = y[i + 1] - y[i];
            r[i] = 3 * (dy1 / (dx1 * dx1) + dy2 / (dx2 * dx2));
        }

        // Last row also different (equation 17 from the article)
        dx1 = x[n - 1] - x[n - 2];
        dy1 = y[n - 1] - y[n - 2];
        m.A[n - 1] = 1.0 / dx1;
        m.B[n - 1] = 2.0 * m.A[n - 1];
        r[n - 1] = 3 * (dy1 / (dx1 * dx1));

        let k = [];
        m.Solve(r, k);
        Utils.resize(this.a,n-1);
        Utils.resize(this.b,n-1);

        for (let i = 1; i < n; i++)
        {
            dx1 = x[i] - x[i - 1];
            dy1 = y[i] - y[i - 1];
            this.a[i - 1] = k[i - 1] * dx1 - dy1; // equation 10 from the article
            this.b[i - 1] = -k[i] * dx1 + dy1; // equation 11 from the article
        }

        m = null;
    },

    Eval:function(x, xxs, debug){
        this.CheckAlreadyFitted();
        let n = x.length;
        let xxss = [];
        Utils.resize(xxss,n);
        this._lastIndex = 0;
        for (let i = 0; i < n; i++) {
            // Find which spline can be used to compute this x (by simultaneous traverse)
            let j = this.GetNextXIndex(x[i]);
            // Evaluate using j'th spline
            xxss[i] = this.EvalSpline(x[i], j, debug);
        }
        this.deepCopy(xxss,xxs);
    },

    // 深拷贝
    deepCopy:function(arry1, arry2){
        for(var i = 0,l= arry1.length;i<l;i++){
            arry2[i] = arry1[i];
        }
    },

});

window.FitParametricDt = function (inputX,inputY,fGap,snakelength,outputCount,outputX,outputY) {

    //cc.log("----------------------------------------------FitParametricDt");
    let num = inputX.length;
    let numArray = [];
    numArray.length = num;
    numArray[0] = 0;
    let num2 = 0;
    for (let i = 1; i < num; i++)
    {
        let num4 = inputX[i] - inputX[i - 1];
        let num5 = inputY[i] - inputY[i - 1];
        let num6 = Math.sqrt(((num4 * num4) + (num5 * num5)));
        num2 += num6;
        numArray[i] = num2;
    }
    snakelength = Math.min( Math.max(snakelength, fGap), num2);

    let num7 = snakelength / fGap;

    let num8 = num7;
    let num9 = num7 - num8;
    //2.x段长度，会分成3段，需4个点。但2.0段只会分成2段，需3个点
    outputCount = Math.ceil(num7) + 1;

    let numArray2 = [];
    numArray2.length = outputCount;
    numArray2[0] = 0;
    for (let j = 1; j < (outputCount - 1); j++)
    {
        numArray2[j] = numArray2[j - 1] + fGap;
    }
    numArray2[outputCount - 1] = numArray2[outputCount - 2] + (fGap * num9);
    Utils.resize(outputX,outputCount);
    Utils.resize(outputY,outputCount);

    var spline = new CubicSpline();
    spline.FitAndEval(numArray, inputX, numArray2, outputCount, outputX);
    var spline2 = new CubicSpline();
    spline2.FitAndEval(numArray, inputY, numArray2, outputCount, outputY);

    spline = null;
    spline2 = null;

    //console.log("---------------------outputY:" + JSON.stringify(outputY));

}
