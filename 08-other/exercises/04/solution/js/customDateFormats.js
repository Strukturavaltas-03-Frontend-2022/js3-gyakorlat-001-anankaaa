const customDateFormats = (date) => {
    const short = new Intl.DateTimeFormat("hu-HU", {
        year: "numeric",
        month:"short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    }).format(date);

    const long = new Intl.DateTimeFormat("hu-HU", {
        year: "numeric",
        month:"long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    }).format(date)
    return {
        short: short
        long: long
    };
};

export default customDateFormats;
