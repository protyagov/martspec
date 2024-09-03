interface ITestEntity {
    name: string;
    log: string;
    entry: string;
    expect: string;
}

// test for:
// - text len: 200
// - range len: 10
export const testEntities: ITestEntity[] = [
    // short review
    {
        name: "short review or perfect length,",
        log: "length <= 200, keep it as it is",
        entry: "Slept like a baby. Great quality, comfort, support. 10/10",
        expect: "Slept like a baby. Great quality, comfort, support. 10/10",
    },

    // long review
    {
        name: "long review (space)",
        log: "walk +-10(also check current pos). No puncts(, . : - ! ?) then accept first space",
        entry: "We had just moved to a new apartment and didn't have a mattress yet, so we went shopping. We visited several of the more traditional mattress stores but always left with feeling that the salesperson was pissed that we didn't close the deal on the spot, which made us want to close the deal even less. When we entered the Casper store, we were greeted by a super-friendly employee who made everything to ensure we were comfortable when trying the different mattresses. She understood our budget and didn't push the more expensive mattresses needlessly. We weren't ready to buy the mattress right there, but we left with a quote in our email and made the purchase later in the week. It was a very smooth process. When the mattress arrived, we had been sleeping on an air mattress for a while, and needless to say, it was the best night of sleep ever. We've been using the Dream for a couple of weeks and love it!",
        expect: "We had just moved to a new apartment and didn't have a mattress yet, so we went shopping. We visited several of the more traditional mattress stores but always left with feeling that the salesperson...",
    },
    {
        name: "long review (puncts)",
        log: "skip first space, if puncts exist prefer it",
        entry: "So far, I love my new Snow Max! We had an older sleep number bed that no longer provided proper support. I had not had a really good night’s sleep in months! We received our new Snow Max within the last week. I am sleeping better than I have in a very long time! I am hopeful that my hip pain will be relieved completely soon!",
        expect: "So far, I love my new Snow Max! We had an older sleep number bed that no longer provided proper support. I had not had a really good night’s sleep in months! We received our new Snow Max within the last week...",
    },

    // no puncts/space or gibberish,
    {
        name: "no puncts/space or gibberish",
        log: "by default splice chars(after 200 len) out if no puncts/space",
        entry: "weyiueutjigsiodjjjjjjjeyrouihyerwhoiueryhiuoeruyhioeroieruj9ipoupro[pg[pdf[pkh[kp5reoutreop[uer[peur[preh[pehr[pkhdfkp[[khpoeu[rpkk[peur1yriewpoqew[pwyrep[]tqwe][pwreyu[]urwp][eeruk[ueko[treur[okuer[kpp[wqtro[kwety[kpwyek[powye[pkyweweyiueutjigsiodjjjjjjjeyrouihyerwhoiueryhiuoeruyhioeroieruj9ipoupro[pg[pdf[pkh[kp5reoutreop[uer[peur[preh[pehr[pkhdfkp[[khpoeu[rpkk[peur1",
        expect: "weyiueutjigsiodjjjjjjjeyrouihyerwhoiueryhiuoeruyhioeroieruj9ipoupro[pg[pdf[pkh[kp5reoutreop[uer[peur[preh[pehr[pkhdfkp[[khpoeu[rpkk[peur1yriewpoqew[pwyrep[]tqwe][pwreyu[]urwp][eeruk[ueko[treur[okuer[k...",
    },

    // puncts at the end of the word(now!)
    {
        name: 'puncts at the end of the word "Max."',
        log: "check index of the puncts. keep in mind about: check current word or find in a range. remove last punct and replace with '...'",
        entry: "I have been impressed so far, easy to adapt and very supportive. Definitely conforms to your body quickly when you lay down. This is my first experience with memory foam. We are happy and well rested now! Love it",
        expect: "I have been impressed so far, easy to adapt and very supportive. Definitely conforms to your body quickly when you lay down. This is my first experience with memory foam. We are happy and well rested now...",
    },
    // puncts at the beginning of the word(,very)
    {
        name: 'puncts at the end of the word ",very"',
        log: "check index of the puncts. keep in mind about: check current word or find in a range. remove first punct and replace with '...'",
        entry: "Only thing to note is that getting that mattress up three flights of narrow stairs was a bit of an ordeal. I have had the Snow mattress for two nights now, and the sleep has been great! Super comfortable ,very large. I should hit the gym more regularly or hire folks to install it next time. Thank you Casper for making such a good product!",
        expect: "Only thing to note is that getting that mattress up three flights of narrow stairs was a bit of an ordeal. I have had the Snow mattress for two nights now, and the sleep has been great! Super comfortable...",
    },
    // puncts that are inside words we should skip "don't"
    {
        name: "puncts that are inside words we should skip 'night’s'",
        log: "should skip all puncts if it isnt a last/first index",
        entry: "So far, I love my new Snow Max! We had an older sleep number bed that no longer provided proper support. We received our new Snow Max within the last week and a half I had not had a really good night’s sleep in months!",
        expect: "So far, I love my new Snow Max! We had an older sleep number bed that no longer provided proper support. We received our new Snow Max within the last week and a half I had not had a really good night’s...",
    },
    // puncts are separated "nice , compact"
    {
        name: "puncts are separated 'nice , compact'",
        log: "if words len === 1 && its a puncts, we can replace it with '...'",
        entry: "I had a great experience with my Casper mattress. I sleep really well on it and stay cool throughout the night, even though it’s a warm summer! It was also so easy to get the mattress delivered in a nice , compact box. Delivery was also communicated very well!",
        expect: "I had a great experience with my Casper mattress. I sleep really well on it and stay cool throughout the night, even though it’s a warm summer! It was also so easy to get the mattress delivered in a nice...",
    },
    // multiple puncts are separated "now .. Right"
    {
        name: "multiple puncts are separated 'now .. Right'",
        log: "if words len === 2 && puncts have first and last index, we can replace it with '...'",
        entry: "This is the best mattress I’ve ever experienced… I thought I wanted to upgrade to something more fancy, and ended up sending it back for another ONE of these. I’m literally lying in it write now .. Right now, excuse me. I’m too relaxed to think ! Goodnight ;)",
        expect: "This is the best mattress I’ve ever experienced… I thought I wanted to upgrade to something more fancy, and ended up sending it back for another ONE of these. I’m literally lying in it write now...",
    },
];
