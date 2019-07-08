function makeItem(item) {
  return `
  <div class="item">
    <div class="heart">
    <i class="far fa-heart" id="redheart"></i>
    </div>
    <img src="${item.img}"/>
    <p class="title" href="${item.link}">${item.title}</p>
    <p class="seller">${item.seller}</p>
    <p class="price">$${item.price}</p>
  </div>
  `
}

let htmlStr = ''
items.results.forEach(item => {
  htmlStr += makeItem({
    img: item.Images[0].url_170x135,
    title: item.title,
    seller: item.Shop.shop_name,
    price: item.price,
    link: item.url,
  })
});

document.querySelector("#stuff").innerHTML = htmlStr

/*
let tip = ''
items.results.forEach(item => {
  tip += makeItem({
    link: item.url,
  })
});

document.querySelector("#tooltip").innerHTML = tip */