<template>
  <div class="save-money">
    <div class="images">
      <img src="../assets/left-img.svg" alt="left image" />
      <img src="../assets/right-img.svg" alt="right image" />
    </div>
    <div class="save-money-content">
      <h4>Save more money</h4>
      <p>eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
      <button class="tips-btn">View Tips</button>
    </div>
  </div>
</template>

<style scoped>
.save-money {
  margin-top: 50px;
  padding: 20px;
  background: #edf0f6;
  border-radius: 15px;
}

.images * {
  position: absolute;
}

.images img:first-child {
  top: -70%;
  left: 0;
}

.images img:last-child {
  right: 0;
  top: -90%;
}

.images {
  min-height: 60px;
  position: relative;
}

.save-money-content h4 {
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.34px;
}

.save-money-content p {
  font-size: 0.75rem;
  font-weight: 400;
  color: #404852;
  line-height: 21px;
  letter-spacing: 0.43px;
}

.tips-btn {
  width: 100%;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  background: #101010;
  color: #fff;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  padding: 10px;
  margin-top: 10px;
}
</style>
