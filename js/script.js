const app = Vue.createApp({
    data() {
        return {
            arrImages: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, 
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, 
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, 
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, 
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            pincolo: 0,
            MyInterval: 0,
        };
    },
    methods: {
        arrImagesIndex(index) {
            return this.arrImages[index].image
        },

        addCounter() {
            if(this.pincolo > 3) {
            this.pincolo = 0;
            } else {
                this.pincolo ++;
            }
        },

        subtractCounter() {
            if(this.pincolo < 1) {
                this.pincolo = 4;
                } else {
                    this.pincolo --;
                }
        },

        thumbs(index) {
            this.pincolo = index;
            console.log ('cliccata la miniatura in posizione ' + index)
        },

        allForwards() {
            clearInterval(this.MyInterval)
            this.MyInterval = setInterval(this.addCounter, 1000)
        },
        
        allBackwards() {
            clearInterval(this.MyInterval)

            this.MyInterval = setInterval(this.subtractCounter, 1000)
        },

        clearInterval() {
            clearInterval(this.MyInterval)
        }
	}


        

});

app.mount('.carousel')

