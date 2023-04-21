let beachesImg = [
    "https://tse1.mm.bing.net/th?id=OIP.hNQ8fQgq9L50LiZXZVAHdwHaEo&pid=Api&P=0",
    "https://tse2.mm.bing.net/th?id=OIP.lDMskoweHiLlVEvprYF7UwHaEo&pid=Api&P=0",
    "https://tse1.mm.bing.net/th?id=OIP.NBtlpT0MAbe6IyvF-sShFAHaFj&pid=Api&P=0",
    "https://tse1.mm.bing.net/th?id=OIP.KDrwNn4qipI30zVBAaYyeAHaE0&pid=Api&P=0",
    "https://tse4.mm.bing.net/th?id=OIP.7R2m15k87PZJ4RxKbnL3YAHaEK&pid=Api&P=0",
    "https://tse4.mm.bing.net/th?id=OIP.MBZwQ4yKM2jOl_E8D4zHrgHaEo&pid=Api&P=0",
    "https://tse4.mm.bing.net/th?id=OIP.C5SEasV3DbEmdsqXjqw1VQHaE6&pid=Api&P=0",
    "https://tse4.mm.bing.net/th?id=OIP.6BysrF4BXlehF4ZuS2QtiAHaEK&pid=Api&P=0",
    "https://tse2.mm.bing.net/th?id=OIP.lDMskoweHiLlVEvprYF7UwHaEo&pid=Api&P=0",
    "https://tse4.mm.bing.net/th?id=OIP.ZRW-L5GWiT47n7BNN7D3QQHaE5&pid=Api&P=0"
];
const imgs =document.getElementsByTagName("img");
for(let i=0;i<imgs.length;i++){
    const randomImg =Math.floor(Math.random() * beachesImg.length);
    imgs[i].src = beachesImg[randomImg];
}
const headers = document.getElementsByTagName("p");
for(let i=0;i<headers.length;i++){
    headers[i].innerText ="Heyaaa";
}