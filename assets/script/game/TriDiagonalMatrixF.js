
var TriDiagonalMatrixF = cc.Class({

    ctor: function () {
        this.A = [];
        this.B = [];
        this.C = [];
    },

    N : function() {
        return this.A.length;
    },

    set : function(row, col, value)
    {
        let di = row - col;
        if (di == 0)
        {
            this.B[row] = value;
        }
        else if (di == -1)
        {
            if(row >= this.N() - 1) {
                return;
            }
            this.C[row] = value;
        }
        else if (di == 1)
        {
            if(row <= 0){
                return;
            }
            this.A[row] = value;
        }
        else{
            return;
        }
    },

    get : function(row,col)
    {
        let di = row - col;
        if (di == 0)
        {
            return this.B[row];
        }
        else if (di == -1)
        {
            if(row >= this.N() - 1){
                return;
            }
            return this.C[row];
        }
        else if (di == 1)
        {
            if(row <= 0){
                return;
            }
            return this.A[row];
        }
        else{
            return 0;
        }
    },

    Solve : function(d,x)
    {
        let n = this.N();

        if (d.length != n) {
            return;
        }

        // cPrime
        let cPrime = [];
        cPrime.length = n;
        cPrime[0] = this.C[0] / this.B[0];

        for (let i = 1; i < n; i++)
        {
            cPrime[i] = this.C[i] / ( this.B[i] - cPrime[i - 1] * this.A[i]);
        }

        // dPrime
        let dPrime = [];
        dPrime.length = n;
        dPrime[0] = d[0] / this.B[0];

        for (let i = 1; i < n; i++)
        {
            dPrime[i] = (d[i] - dPrime[i - 1] * this.A[i]) / (this.B[i] - cPrime[i - 1] * this.A[i]);
        }

        // Back substitution
        Utils.resize(x,n);
        x[n - 1] = dPrime[n - 1];
        for (let i = n - 2; i >= 0; i--)
        {
            x[i] = dPrime[i] - cPrime[i] * x[i + 1];
        }
    },

});
