var app = new Vue({
    el: "#app",
    data() {
      return {
        index: 0,
        image: null,
        images: [{
            id: 1,
            src: "https://r1.ilikewallpaper.net/ipad-wallpapers/download/26516/Natural-Grove-Green-Trees-Path-ipad-wallpaper-ilikewallpaper_com.jpg",
            alt: "Natural Grove Green Trees Path"
          },
          {
            id: 2,
            src: "https://st2.depositphotos.com/1000438/6182/i/950/depositphotos_61826015-stockafbeelding-cascades-in-nationaal-park-plitvice.jpg",
            alt: "stockafbeelding cascades in nationaal park plitvice"
          },
          {
            id: 3,
            src: "https://orig00.deviantart.net/6787/f/2016/104/5/6/aria_maleki___natural_view_of_waterfall_by_aria_maleki-d9yytu8.jpg",
            alt: "natural view of waterfall"
          }
        ]
      }
    },
    mounted() {
      this.switchImage();
    },
    methods: {
      switchImage() {
        this.image = this.images[this.index];
        this.index = (this.index + 1) % this.images.length;
      }
    }
  });