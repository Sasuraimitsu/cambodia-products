// カート追加時のキャラクターメッセージ変更
const cartButton = document.getElementById('cart-button');
const bubble = document.getElementById('hero-bubble');

cartButton.addEventListener('click', () => {
    bubble.innerText = 'ありがとう！美味しいスープを作ってね！';
    bubble.style.backgroundColor = '#D4AF37'; // ゴールドに変更
    alert('商品をカートに追加しました！');
});

// スクロールに合わせて要素をふわっと表示させる（Day 3用）
window.addEventListener('scroll', () => {
    // ここにスクロールアニメーションを追加可能
});
