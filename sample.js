
(async () => {

    const RIS   = require("wordnet-ris")
    const RISde = require(".")

    console.log(RISde.name)

    let ris = new RIS(RISde.db)
    let results = await ris.lookup("Sprecher")
    console.log(results)

})().catch((err) => {
    console.log(`ERROR: ${err}`)
})

