function hideAllContents() {
    const message = document.getElementById('message');
    const gift = document.getElementById('gift');
    const surprise = document.getElementById('surprise');
 message.classList.add('hidden');
    gift.classList.add('hidden');
    surprise.classList.add('hidden');

    gift.style.top = '-100px';
  }

  document.getElementById('messageButton').addEventListener('click', function () {
    hideAllContents();
    const messages = [
      '聖誕快樂啦 玥駖 雖然我們才認識幾天而已，但很高興認識妳，突然遇到一個都是彰化人，剛開始真的嚇到了，不過妳很有趣也很可愛，祝妳能夠上台藝大，這世界上很多人很多事會讓妳不開心，別想太多，希望妳要永遠開心，抱持好心情，還有我陪妳開港 Merry Christmas 🎄✨',
      'Merry Christmas and Happy New Year! 🎅',
    ];
    const message = document.getElementById('message');
    message.textContent = messages[Math.floor(Math.random() * messages.length)];
    message.classList.remove('hidden');
  });

  document.getElementById('giftButton').addEventListener('click', function () {
    hideAllContents();
    const gift = document.getElementById('gift');
    const surprise = document.getElementById('surprise');

    gift.classList.remove('hidden');
    gift.style.top = '-300px';

    setTimeout(() => {
      gift.style.top = 'calc(100vh - 200px)';
    }, 50);

    setTimeout(() => {
      const confirm = window.confirm('點一下簽收你的禮物 🎁');
      if (confirm) {
        gift.classList.add('hidden');
        surprise.classList.remove('hidden');
      }
    }, 2100);
  });