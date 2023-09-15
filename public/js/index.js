// JavaScript 코드를 이 파일에 추가
document.getElementById('dangerButton').addEventListener('click', () => {
    // POST 요청을 보내는 JavaScript 코드 추가
    fetch('/postRequest', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: 'someData' }) // 원하는 데이터를 JSON 형식으로 전송
    })
    .then(response => response.json())
    .then(data => {
        console.log('서버 응답:', data);
    })
    .catch(error => {
        console.error('에러:', error);
    });
});
