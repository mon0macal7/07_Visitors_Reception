const registro = document.getElementById("btn-siguiente");
registro.addEventListener("click", () => {
  document.getElementById("pantalla1-registro").hidden = true;
  document.getElementById("pantalla2-foto").hidden = false;
  const video = document.getElementById("video");
  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then((stream) => {
      video.srcObject = stream;
      console.log(stream);
    })
    .catch((error) => {
      console.log(error);
    });
  document.getElementById("tomarFoto").addEventListener("click", () => {
    getImg();
  });

  function getImg(video) {
    const canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    let dataURL = canvas.toDataURL();
    return dataURL;
  }
  let base64 = getImg(document.getElementById("video"));
  console.log(base64);
  formulario.foto = base64;
  formulario.date = ctx.drawImage(
    video,
    0,
    0,
    video.videoWidth,
    video.videoHeight
  );
});
