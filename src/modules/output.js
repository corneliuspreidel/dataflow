( function(Output) {
 
  Output.Model = Backbone.Model.extend({
    defaults: {
      label: "output",
      type: "all"
    },
    initialize: function() {
    }
  });

  Output.Collection = Backbone.Collection.extend({
    model: Output.Model
  });

}(Dataflow.module("output")) );
