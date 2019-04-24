var controller = new ScrollMagic.Controller()

const scrollDuration = 1000
    new ScrollMagic.Scene({
      triggerElement: "#trigger1",
      duration: scrollDuration, // scroll distance
      //   offset: 200 // start this scene after scrolling for 50px
    })
      .setClassToggle("#card-image", "card__image-animated")
      //   .setPin("#myElement") // pins the element for the the scene's duration
      .addTo(controller) // assign the scene to the controller

    new ScrollMagic.Scene({
      triggerElement: "#trigger1",
      duration: scrollDuration, // scroll distance
      //   offset: 200 // start this scene after scrolling for 50px
    })
      .setClassToggle("#card-line", "card__line-animated")
      //   .setPin("#myElement") // pins the element for the the scene's duration
      .addTo(controller) // assign the scene to the controller

    new ScrollMagic.Scene({
      triggerElement: "#trigger1",
      duration: scrollDuration, // scroll distance
      //   offset: 200 // start this scene after scrolling for 50px
    })
      .setClassToggle("#card-content", "card__content-animated")
      //   .setPin("#myElement") // pins the element for the the scene's duration
      .addTo(controller) // assign the scene to the controller

    new ScrollMagic.Scene({
      triggerElement: "#trigger1",
      duration: scrollDuration, // scroll distance
      //   offset: 200 // start this scene after scrolling for 50px
    })
      .setClassToggle("#card-footer", "card__footer-animated")
      //   .setPin("#myElement") // pins the element for the the scene's duration
      .addTo(controller) // assign the scene to the controller

      new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        duration: scrollDuration, // scroll distance
        //   offset: 200 // start this scene after scrolling for 50px
      })
        .setClassToggle("#card", "card-animated")
        //   .setPin("#myElement") // pins the element for the the scene's duration
        .addTo(controller) // assign the scene to the controller

        new ScrollMagic.Scene({
          triggerElement: "#trigger1",
          duration: scrollDuration, // scroll distance
            offset: 600 // start this scene after scrolling for 50px
        })
          .setClassToggle("#card", "card-animated-out")
          //   .setPin("#myElement") // pins the element for the the scene's duration
          .addTo(controller) // assign the scene to the controller
    