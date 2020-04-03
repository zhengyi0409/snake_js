/**
 * 试图管理
 */
(function() {

    var ViewMgr = {
        list: [],

        layerType: {
            MAIN: 0,
            POP: 1,
        },

        push: function(view) {
            var list_ = this.list[view.layerType];

            if (!list_)
                list_ = [];
            list_.push(view);
        },

        pop: function(view) {
            var list_ = this.list[view.layerType];

            if (list_.length == 0)
                return;
            
            list_.pop();

            if (list_.length == 0)
                return;

            view = list_[list_.length - 1];
            if (view.fresh)
                view.fresh();
        },

        clear: function(type) {
            var list_ = this.list[type];
            if (list_)
                list_ = [];
        },

    }

});