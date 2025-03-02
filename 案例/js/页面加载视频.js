const videoContainer = document.getElementById("video-container");
const mainContent = document.getElementById("main-content");
const loaderVideo = document.getElementById("loader-video");

// 视频播放结束事件
loaderVideo.addEventListener("ended", () => {
  // 添加淡出效果
  videoContainer.classList.add("fade-out");

  // 显示主内容并添加淡入效果
  mainContent.classList.add("show-main");

  // 动画结束后移除视频容器
  videoContainer.addEventListener(
    "transitionend",
    () => {
      videoContainer.style.display = "none";
    },
    { once: true }
  );
});

// 确保视频自动播放
document.addEventListener("DOMContentLoaded", () => {
  loaderVideo.play().catch((error) => {
    console.log("自动播放被阻止，尝试手动播放");
  });
});