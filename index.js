

    $(document).ready(function() {

      $("#owl-demo").owlCarousel({

          navigation : true, // Show next and prev buttons
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem:true,
          autoPlay: true,
          itemsDesktop : [1199,4],
          itemsDesktopSmall : [980,3],
          itemsTablet: [768,2],
          itemsTabletSmall: false,
          itemsMobile : [479,1],
          

          // "singleItem:true" is a shortcut for:
          // items : 1,
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false

      });

    });
