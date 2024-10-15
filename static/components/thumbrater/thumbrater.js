(function(){

    // TODO: Complete.
    // from starrater.js

    var thumbRater = {
        props: ['url', 'callback_url'],
        data: null,
        methods: {}
    };
    
    thumbRater.data = function() {
        var data = {
            rating: 0,
            get_url: this.url,
            set_url: this.callback_url
        };
        thumbRater.methods.load.call(data);

        return data;
    };
    
    thumbRater.methods.load = function() {
        let self = this;
        axios.get(self.get_url).then(function(res){
            //console.log("Successfully loaded")
            self.rating = res.data.rating;
        })
    };
    
    thumbRater.methods.set_rating = function(newRating){
        console.log(newRating)
       
        this.rating = newRating
        let self = this
        axios.get(self.set_url,
            {params: {'rating': newRating}}).then((response)=> {
                //console.log(response)
            }).catch((error) =>{
                console.log(error)
            });
    }
    
    utils.register_vue_component('thumbrater', 'components/thumbrater/thumbrater.html',
        function(template){
            thumbRater.template = template.data;
            return thumbRater;
    });

})();
