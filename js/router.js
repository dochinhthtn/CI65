let router = new Navigo(null, true, '#');

router.on('/teacher', function() {
    console.log('Đến nhà thầy giáo');
}).resolve();

router.on('/lover', function() {
    console.log('Đến nhà người yêu');
}).resolve();

router.on('/old-girlfriend', function() {
    console.log('Đến nhà người yêu cũ');
}).resolve();

window.router = router;