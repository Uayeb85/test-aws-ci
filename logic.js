const countEl = document.getElementById('count');

updateVisitCount();

function updateVisitCount() {
fetch('https://api.countapi.xyz/update/iamgus/aws/?amount=1')
.then(res => res.json())
.then(res => {
countEl.innerHTML = res.value;
})
}
