export default {
    from: 'no-reply@verify.proton.me',

    scan(data) {
        const match = data.match(/Your Proton verification code is:\s*[\s\S]*?<code[^>]*>\s*(\d{6})\s*<\/code>/i);
        return match ? match[1] : null;
    }
};
