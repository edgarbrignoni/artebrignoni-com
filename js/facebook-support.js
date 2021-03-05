function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;

    if (macosPlatforms.indexOf(platform) !== -1) {
        os = 'https://facebook.com/159475224114276';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
        os = 'fb://page/?id=159475224114276';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
        os = 'https://facebook.com/159475224114276';
    } else if (/Android/.test(userAgent)) {
        os = 'fb://page/159475224114276';
    } else if (!os && /Linux/.test(platform)) {
        os = 'https://facebook.com/159475224114276';
    }

    document.querySelector('#facebook-link').href = os;

    return os;
}
