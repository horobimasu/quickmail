export default {
    from: 'noreply@m.fluxer.com',

    scan(data) {
        const match = data.match(/https:\/\/fluxer\.com\/verify#token=[\w-]+/);
        return match ? match[0] : null;
    }
};
