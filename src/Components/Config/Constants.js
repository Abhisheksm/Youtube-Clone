
export const YOUTUBE_VIDEOS_LIST_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${API_KEY}`

export const AUTOSUGGEST_API = 'http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q='

export const YOUTUBE_SEARCH_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=${API_KEY}&q=`

export const LIVE_CHAT_MESSAGE_LIMIT =25

export const randomNameGenerator = {
    names: ["Abhishek", "Rushikesh", "Mangesh", "Onkar", "Yogesh", "Nandan"],
    messages: ["Hello!!", "Kay Challay?", "Kahi nahi bhava", "Kasa Aahes", "Majet, Tu Sang"],
    generateRandomName() {
      return this.names[Math.floor(Math.random() * this.names.length)];
    },
    generateRandomMessage() {
      return this.messages[Math.floor(Math.random() * this.messages.length)];
    },
    generateRandomObject() {
      return {
        name: this.generateRandomName(),
        message: this.generateRandomMessage(),
      };
    },
  };