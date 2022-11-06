function handleSession(db)
{
    return function(req, res)
    {
        const sessions = db.collection("Sessions");
        console.log("from session");

        //generating a list of indexes to randomize the prompts that are called
        a = [];
        for (i=0;i<10;i++)
        {
            a[i]=i;
        }
        var random = shuffle(a);
        console.log(random);
        var id = addSession(sessions, a).then((id)=>
        {
            console.log(id)
            res.send(id)
        })

        
    }
    
}

// http://stackoverflow.com/questions/962802#962890
function shuffle(array)
 {
    var tmp, current, top = array.length;
    if(top) while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
    return array;
}

async function addSession(sessions, array)
{
    try
    {

        docID = await sessions.insertOne({"prompts": {array},
        "index" : 0});
        return docID.insertedId;
    }
    catch(e)
    {
        console.error(e);
    }
}

module.exports = function (db) 
{
    var module = {};
    module.handleSession = handleSession(db);

    return module;
}