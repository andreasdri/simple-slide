
if(Meteor.isClient) {

  SimpleSlide = {
    settings: {
      numberOfSlides: null,
      className: "slide",
      prefix: "slide-"
    },
    config: function(config) {
      this.settings = _.extend(this.settings, config);
    }
  };

  Session.setDefault('activeSlide', 1);

  Template.presentation.helpers({
    activeSlide : function() {
      return SimpleSlide.settings.prefix + Session.get('activeSlide');
    },
    className : function() {
      return SimpleSlide.settings.className;
    }
  });

  Template.body.events({
    'keyup' : function(event) {
      if(event.keyCode === 39 && Session.get('activeSlide') !== SimpleSlide.settings.numberOfSlides) {
        Session.set('activeSlide', Session.get('activeSlide')+1);
      }
      if((event.keyCode === 37 || event.keyCode === 32) && Session.get('activeSlide') !== 1) {
        Session.set('activeSlide', Session.get('activeSlide')-1);
      }
    },
    'click' : function(event) {
      if(Session.get('activeSlide') !== SimpleSlide.settings.numberOfSlides){
        Session.set('activeSlide', Session.get('activeSlide')+1);
      }
    }
  });
}

