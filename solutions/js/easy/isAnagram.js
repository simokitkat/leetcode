"use strict";
function isAnagram(s, t) {
    if (s.length !== t.length)
        return false;
    const sHashMap = new Map();
    const tHashMap = new Map();
    for (let i = 0; i < s.length; i++) {
        const sChar = sHashMap.get(s[i]);
        const tChar = tHashMap.get(t[i]);
        sHashMap.set(s[i], sChar ? sChar + 1 : 1);
        tHashMap.set(t[i], tChar ? tChar + 1 : 1);
    }
    for (const key of sHashMap.keys()) {
        if (sHashMap.get(key) !== tHashMap.get(key))
            return false;
    }
    return true;
}
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
