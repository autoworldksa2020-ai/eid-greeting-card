const nameInput = document.getElementById('nameInput');
const nameText  = document.getElementById('nameText');
const downloadBtn = document.getElementById('downloadBtn');
const posSelect = document.getElementById('posSelect');
const colorSelect = document.getElementById('colorSelect');
const sizeSelect = document.getElementById('sizeSelect');
const card = document.getElementById('card');

function applyName(){

  const v = (nameInput.value || '').trim();
  nameText.textContent = v ? v : 'اسمك هنا';

  const isArabic = /[\u0600-\u06FF]/.test(v);

  if(isArabic){
    nameText.style.fontFamily = "FFShamelFamily";
  }else{
    nameText.style.fontFamily = "Co Headline W01";
  }
}

function applyPos(){

  const v = posSelect.value;

  if(v === "top"){
    nameText.style.top = "6%";
    nameText.style.bottom = "auto";
    nameText.style.transform = "none";
  }

  else if(v === "center"){
    nameText.style.top = "50%";
    nameText.style.bottom = "auto";
    nameText.style.transform = "translateY(-50%)";
  }

  else{
    nameText.style.top = "auto";
    nameText.style.bottom = "6%";
    nameText.style.transform = "none";
  }

}

function applyColor(){
  nameText.style.color = colorSelect.value;
}

function applySize(){
  nameText.style.fontSize = sizeSelect.value + "px";
}

nameInput.addEventListener("input", applyName);
posSelect.addEventListener("change", applyPos);
colorSelect.addEventListener("change", applyColor);
sizeSelect.addEventListener("change", applySize);

applyName();
applyPos();
applyColor();
applySize();

downloadBtn.addEventListener("click", async () => {

  downloadBtn.disabled = true;
  downloadBtn.textContent = "جاري التحضير...";

  const dataUrl = await htmlToImage.toPng(card,{
    cacheBust:true,
    pixelRatio:1080 / card.getBoundingClientRect().width,
    backgroundColor:"#111820"
  });

  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = "Eid_Greeting_1080x1350.png";
  a.click();

  downloadBtn.disabled = false;
  downloadBtn.textContent = "تحميل الصورة";

});