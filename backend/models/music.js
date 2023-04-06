const appData = [
    {
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "./images/song-1.jpg",
      src: "https://res.cloudinary.com/dkoggipor/video/upload/v1680721227/on-n-on_tnukr8.mp3"
    },
    {
      title: "Private Valet",
      artist: "Larry June",
      img_src: "./images/song-2.jpg",
      src: "https://res.cloudinary.com/dkoggipor/video/upload/v1680721224/Larry-June-PrivateValet_zkq7ch.mp3"
    },
    {
      title: "4 U ft Kali Uchis",
      artist: "Don Toliver",
      img_src: "./images/song-3.jpg",
      src: "https://res.cloudinary.com/dkoggipor/video/upload/v1680721202/Don_Toliver-DonToliver-4-Me_Official_Audio_znybx7.mp3"
    },
    {
      title: "Time ft HER",
      artist: "Kaytranada",
      img_src: "./images/song-4.jpg",
      src: "https://res.cloudinary.com/dkoggipor/video/upload/v1680721224/KAYTRANADA-Intimidated_akc9ui.mp3"
    },
    {
      title: "Savior ft Baby Keem",
      artist: "Kendrick Lamar",
      img_src: "./images/song-4.jpg",
      src: "https://res.cloudinary.com/dkoggipor/video/upload/v1680721118/Kendrick-Lamar-Savior-Ft-Baby-Keem-Sam-Dew-_HipHopKit.com_lmysbp.mp3"
    },
    {
      title: "Do It Right",
      artist: "Don Toliver",
      img_src: "./images/song-4.jpg",
      src: "https://res.cloudinary.com/dkoggipor/video/upload/v1680721197/Don-Toliver-Do-It-Right-_HiphopKit.com_hjlpjk.mp3"
    },
    {
      title: "Encouragement",
      artist: "Don Toliver",
      img_src: "./images/song-4.jpg",
      src: "https://res.cloudinary.com/dkoggipor/video/upload/v1680721196/Don-Toliver-Encouragement-_HiphopKit.com_y779eo.mp3"
    },
    {
      title: "Company Pt. 3",
      artist: "Don Toliver",
      img_src: "./images/song-4.jpg",
      src: "https://res.cloudinary.com/dkoggipor/video/upload/v1680721198/Don-Toliver-Company-Pt-3-_HiphopKit.com_qkl7ip.mp3"
    },
    {
      title: "Bus Stop ft Brent Faiyaz",
      artist: "Don Toliver",
      img_src: "./images/song-4.jpg",
      src: "https://res.cloudinary.com/dkoggipor/video/upload/v1680721200/Don-Toliver-Bus-Stop-ft-Brent-Faiyaz-_HiphopKit.com_a3kf2f.mp3"
    },
    {
      title: "If I Had ft Charlie Wilson",
      artist: "Don Toliver",
      img_src: "./images/song-4.jpg",
      src: "https://res.cloudinary.com/dkoggipor/video/upload/v1680721201/Don-Toliver-If-I-Had-ft-Charlie-Wilson-_HiphopKit.com_tzsdfe.mp3"
    },
    {
      title: "Leave The Club ft Lil Durk & Glorilla",
      artist: "Don Toliver",
      img_src: "./images/song-4.jpg",
      src: "https://res.cloudinary.com/dkoggipor/video/upload/v1680721205/Don-Toliver-Leave-The-Club-Ft-Lil-Durk-GloRilla-_HiphopKit.com_j9w986.mp3"
    },
    {
      title: "Jumbotron Sh*t Poppin",
      artist: "Drake",
      img_src: "./images/song-4.jpg",
      src: "https://res.cloudinary.com/dkoggipor/video/upload/v1680721205/Drake-Jumbotron-Shit-Poppin-_HiphopKit.com_faxlhj.mp3"
    },
    {
      title: "Leather Coat",
      artist: "Don Toliver",
      img_src: "./images/song-4.jpg",
      src: "https://res.cloudinary.com/dkoggipor/video/upload/v1680721205/Don-Toliver-Leather-Coat-_HiphopKit.com_yybjkg.mp3"
    },
    {
      title: "Slow Motion ft Wizkid",
      artist: "Don Toliver",
      img_src: "./images/song-4.jpg",
      src: "https://res.cloudinary.com/dkoggipor/video/upload/v1680721206/Don-Toliver-Slow-Motion-ft-Wizkid-_HiphopKit.com_iaeuip.mp3"
    },
    {
      title: "Drugs N Hella Melodies",
      artist: "Don Toliver",
      img_src: "./images/song-4.jpg",
      src: "https://res.cloudinary.com/dkoggipor/video/upload/v1680721207/Don-Toliver-Drugs-N-Hella-Melodies-ft-Kali-Uchis-_HiphopKit.com_pelwhu.mp3"
    },
    {
      title: "Treacherous Twin ft 21 Savage",
      artist: "Don Toliver",
      img_src: "./images/song-4.jpg",
      src: "https://res.cloudinary.com/dkoggipor/video/upload/v1680721210/Drake-Treacherous-Twins-ft-21-Savage-_HiphopKit.com_ekelsq.mp3"
    },
    {
      title: "Lemon Pepper ft Rick Ross",
      artist: "Drake",
      img_src: "./images/song-4.jpg",
      src: "https://res.cloudinary.com/dkoggipor/video/upload/v1680721210/Drake-Lemon-Pepper-Freestyle-feat-Rick-Ross-_HipHopKit.com_n8nuac.mp3"
    },
    {
      title: "In My Garden",
      artist: "Kali Uchis",
      img_src: "./images/song-4.jpg",
      src: "https://res.cloudinary.com/dkoggipor/video/upload/v1680721211/Kali-Uchis-in-My-Garden-_HiphopKit.com_rwgvpg.mp3"
    },
    {
      title: "Fantasy ft Don Toliver",
      artist: "Kali Uchis",
      img_src: "./images/song-4.jpg",
      src: "https://res.cloudinary.com/dkoggipor/video/upload/v1680721213/Kali-Uchis-Fantasy-ft-Don-Toliver-_HiphopKit.com_w0tiuv.mp3"
    },
    {
      title: "I Wish You Roses ",
      artist: "Kali Uchis",
      img_src: "./images/song-4.jpg",
      src: "https://res.cloudinary.com/dkoggipor/video/upload/v1680721214/Kali-Uchis-I-Wish-you-Roses-_HiphopKit.com_oawaa6.mp3"
    },
    {
      title: "Wants and Needs ft Lil Baby",
      artist: "Drake",
      img_src: "./images/song-4.jpg",
      src: "https://res.cloudinary.com/dkoggipor/video/upload/v1680721215/Drake-Wants-and-Needs-feat-Lil-Baby-_HipHopKit.com_navv6b.mp3"
    },
    {
      title: "Middle of the Ocean",
      artist: "Drake",
      img_src: "./images/song-4.jpg",
      src: "https://res.cloudinary.com/dkoggipor/video/upload/v1680721221/Drake-Middle-of-the-Ocean-_HiphopKit.com_lxxr87.mp3"
    },
    
  ];

  module.exports = appData