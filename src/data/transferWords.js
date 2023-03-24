import fs from "fs";
import path from "path";

fs.readFile(path.resolve("./src/data/words_alpha.txt"), "utf-8", (err, data) => {
    if (err) {
        console.error(err);
    } else {
        const words = data.split('\n').map(word => word.trim());
        fs.writeFileSync("./src/data/normal_words.txt", words.filter(word => word.length === 6).join('\n'));
        fs.writeFileSync("./src/data/hard_words.txt", words.filter(word => word.length === 7).join('\n'));
    }
});