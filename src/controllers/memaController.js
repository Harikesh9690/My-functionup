const axios = require('axios')

const createMeme = async function(req, res){
try {
    let id = req.query.template_id;
    let text0 = req.body.text0;
    let text1 = req.body.text1;
    let details = {
        method:"post",
        url:`https://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}&text1=${text1}&username=chewie12345&password=meme@123`
    }
    let result = await axios(details)
    res.status(200).send(result.data)
} catch (err) {
    res.status(500).send({error:err})
}
}

module.exports.createMeme = createMeme