export default class Coloring {
    static lightenColor(color: string, amount: number) {
        const hex = color.replace(/[^0-9A-F]/gi, '');

        const r = Math.min(255, parseInt(hex.substring(0, 2), 16) + 255 * amount);
        const g = Math.min(255, parseInt(hex.substring(2, 4), 16) + 255 * amount);
        const b = Math.min(255, parseInt(hex.substring(4, 6), 16) + 255 * amount);

        const newHex = [r, g, b]
            .map(value => Math.round(value).toString(16).padStart(2, '0'))
            .join('');

        return `#${newHex}`;
    }

    static darkenColor(color: string, amount: number) {
        const hex = color.replace(/[^0-9A-F]/gi, '');

        const r = Math.max(0, parseInt(hex.substring(0, 2), 16) - 255 * amount);
        const g = Math.max(0, parseInt(hex.substring(2, 4), 16) - 255 * amount);
        const b = Math.max(0, parseInt(hex.substring(4, 6), 16) - 255 * amount);

        const newHex = [r, g, b]
            .map(value => Math.round(value).toString(16).padStart(2, '0'))
            .join('');

        return `#${newHex}`;
    }
}
