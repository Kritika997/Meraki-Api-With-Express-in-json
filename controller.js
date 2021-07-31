const fs = require("fs");
var raw_data = require("../model/model")

exports.get = (req,res)=>{
    res.json(raw_data);
};

exports.post = (req,res)=>{
    const Mydata = {
        id:req.body.id,
        name:req.body.name
    };
    raw_data["availableCourses"].push(Mydata)
    res.json(raw_data);

    fs.writeFile("saral_course.json",JSON.stringify(raw_data,null,"\t"),err=>{
        if(err){
            console.log(err);
        }else{
            console.log("data added");
        };
    });
};
exports.put = (req,res)=>{
    const data = {
        id:req.body.id,
        name:req.body.name
    };
    let index = raw_data["availableCourses"].findIndex(()=>{
        return(data["id"]==Number.parseInt(data["id"]));
    });
    if (index>=0){
        let update = raw_data["availableCourses"][index];
        update.name = data.name
        res.json(update);
    }else{
        res.send("error");
    };
    fs.writeFile("saral_course.json",JSON.stringify(raw_data,null,"\t"),err=>{
        if(err){
            res.send(err);
        }else{
            res.send("done");
        };
    });
};
exports.delete = (req,res)=>{
    const data = {
        id:req.body.id,
        name:req.body.name
    };
    let index = raw_data["availableCourses"].findIndex(()=>{
        return(data["id"]==Number.parseInt(data["id"]));
    });
    if(index>=0){
        let del = raw_data["availableCourses"][index];
        raw_data["availableCourses"].splice(index,1);
        res.send(del);
    }
    else{
        res.send("error");
    };
    fs.writeFile("saral_course.json",JSON.stringify(raw_data,null,"\t"),err=>{
        if(err){
            res.send(err);
        }else{
            res.send("done")
        };
    });
}

