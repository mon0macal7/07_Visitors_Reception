 const video = document.getElementById('video')
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(
          (stream) => {
            video.srcObject = stream;
            console.log(stream)
          }
        )
        .catch((error) => {
          console.log(error)
        })
      document.getElementById("tomarFoto").addEventListener("click", () => {
        tomarFoto()
      })

      function tomarFoto() {
        const canvas = document.getElementById("canvas")
        let ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight)
      }
    