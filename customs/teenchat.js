export default {
    from: 'noreply@teen-chat.org',

    scan(data) {
        const match = data.match(/Verification code:\s*(\d+)/);
        return match ? match[1] : null;
    }
};
