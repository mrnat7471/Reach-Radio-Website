<template>
  <div class="page" style="padding-bottom: 15px;">
    <section class="container pt-3">
      <h4 class="border3 ml-1 mr-1 pt-5" style="margin-bottom:15px;">Soundcheck</h4>
      <p>Love music? Have a say on what we play on Reach and tell us which songs you'd love to hear!</p>
      <p>Firstly- search our database for a song that you would like to add. If your song does not come up you will be able to suggest it.</p>
      <div style="padding-bottom: 50px;">
          <form class="pl-3" @submit.prevent="findSong">
            <b-row>
              <b-col>
                <label for="name">Song Name</label>
                <input
                  class="form-control"
                  id="song"
                  name="song"
                  required
                  type="text"
                  v-model="form.name"/>
              </b-col>
              <b-col>
              <button type="submit" style="margin-top:31px; text-decoration: none; color: black;" value="Search" class="btn btn-warning">Search</button>
              </b-col>
            </b-row>
          </form>
        </div>
        <ol class="pl-0 ml-0">
          
          <div v-for="song in songData" :key="song.uuid" class="mt-1">
          <div class="grid-container">
            <div class="image"><img :src="song.graphic.medium" style="height: auto; width: 100%;"></div>
            <div class="details pl-3"><h4 class="title">{{song.title}}</h4><p>{{song.artist}}</p>
            <div style="margin-top:-5px!important;" v-if="song.extraInfo.trackUrl"><a :href="song.extraInfo.trackUrl"><div class="apple_music_logo"></div></a></div>
        </div>  
      </div>

      </div>
        </ol>
        <div v-if="songData">
          <h4 class="border3 ml-1 mr-1 pt-5" style="margin-bottom:15px;">Song not listed? Request it below.</h4>
          <div class="grid-container" v-for="song in appleMusicData">

            <div class="image"><img :src="song.artworkUrl100" style="height: auto; width: 100%;"></div>
            <div class="details pl-3"><h4 class="title"><span style="max-width:450px;">{{song.trackName}}</span> <a style="text-decoration: none; color: white;" class="btn btn-sm btn-success" v-on:click="submitSuggestion">Suggest</a></h4><p>{{song.artistName}}</p>
            <div style="margin-top:-5px!important;margin-bottom:5px;" v-if="song.trackViewUrl"><a :href="song.trackViewUrl"><div class="apple_music_logo"></div></a></div>
            <a style="text-decoration: none; color: white;" class="btn btn-sm btn-success btn-small suggest" v-on:click="submitSuggestion">Suggest</a>
        </div>  
        </div>
        </div>
    </section>
  </div>
</template>

<script>
  import axios from 'axios'
  let sendData = ""
  export default {
    data() {
      return {
        songData: {
           song: {
               graphic: {
                   medium: "https://radiopanel.s3.nl-ams.scw.cloud/c9a65443-eed1-41ed-b9d2-743223b5ee75/e3df08e2-5a92-4737-b4b9-0d52d0b90c5f.png",
               },
               title: "Reach Radio",
               artist: "Reach Radio",
               extraInfo: {
                   trackUrl: "https://reachradio.co.uk"
               }
            }
           
        },
        appleMusicData: {},
        form: {
          song: null,
        },
      }
    },
    methods: {
      findSong() {
          this.$toast.info('Searching our Database', {
              position: 'bottom-right',
              duration: 5000,
            }) 
          axios.get(`#`, auth)
          .then((res) => {
            this.$toast.success('Success', {
              position: 'bottom-right',
              duration: 5000,
            })  
            this.songData = res.data._embedded;
          })
          this.$toast.info('Searching Apple Music', {
              position: 'bottom-right',
              duration: 5000,
            }) 
          axios.get(`https://itunes.apple.com/search?term=${this.form.name}&media=music&limit=1`)
          .then((res) => {
            this.$toast.success('Success', {
              position: 'bottom-right',
              duration: 5000,
            })  
            this.appleMusicData = res.data.results;
        
          })

        },
        submitSuggestion() {
          axios.post('https://api.radiopanel.co/api/v1/forms/7ecd1fae-bb79-4601-9f24-7574f3548d42/entries', {
            fields: {
              artist: this.appleMusicData[0].artistName,
              title: this.appleMusicData[0].trackName,
            }
          }, auth).then(result => {
            this.$toast.success('Thank you for your suggestion', {
              position: 'bottom-right',
              duration: 5000,
            })
          }).catch((e) => {
            this.$toast.error(e.response.data.message, {
              position: 'bottom-right',
              duration: 5000,
            })
          })

        }
      }
    }

</script>

<style>
.suggest{display: none;}
@media(max-width:850px){
  .title {
  text-overflow:initial;
  overflow: hidden;
  max-height: 1.2em;
  }
}

@media (min-width: 850px) {
     .grid-container {
  display: grid;
  grid-template-columns: 2em 6em 1fr 9em;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "position image details dl-link"
}
.position { grid-area: position; }
.image { grid-area: image; }
.details { grid-area: details; }
.dl-link { grid-area: dl-link; }
}
@media (max-width: 850px) {
     .grid-container {
  display: grid;
  grid-template-columns: 2em 6em 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "position image details dl-link"
}
.position { grid-area: position; }
.image { grid-area: image; }
.details { grid-area: details; }
.dl-link { display:none; }
}
@media(min-width:851px){
  .dl-link-small {
    display: none;
    bottom: 0px;
  }
}
@media(max-width:500px){
  .suggest{
    display: inline;
  }
}
</style>
