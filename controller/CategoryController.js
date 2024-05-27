const {Category} = require('../models')

exports.getAllCategories = async (req,res) => {

    try {
        const category = await Category.findAll();

        return res.status(200).json({
            message : 'success',
            data : category
        })
    } catch (error) {
        return res.status(500).json({
            message : 'fail',
            error: "Server Down"
        })
    }
  
   
}

exports.storeCategory = async (req,res) => {
   
   try {
    let {name, description} = req.body
    
    const category = await Category.create(
        { 
            name: name, 
            description: description 
        }
    );

        return res.status(201).json({
            status : "succes",
            message:"Data Berhasil Ditambahkan",
            data : category
        })

   } catch (error) {
        return res.status(400).json({
            status : "fail",
            error : error.errors
        })
   } 
}

exports.detailCategories = async (req,res) => {
   
    try {
        const id = req.params.id
        const category = await Category.findByPk(id);

        if(!category){
            return res.status(404).json({
                status : "Fail",
                error : "Data tidak ditemukan"
            })
        }

        return res.status(200).json({
                status : "success",
                data : category
        })
    } catch (error) {
        return res.status(500).json({
            message : 'fail',
            error: "Server Down"
        })
    }
    
}


exports.updateCategories = async (req,res) => {
   
    try {
        const id = req.params.id
        await Category.update(req.body,
            {
                where: 
                {
                    id: id,
                },
            },
        );
        const category = await Category.findByPk(id);

        if(!category){
            return res.status(500).json({
            message : 'fail',
            error: "id tidak ditemukan"
        })
        }
        return res.status(200).json({
            status : "succes",
            message:"Data Berhasil Diupdate",
            data : category
        })
    } catch (error) {
        return res.status(500).json({
            message : 'fail',
            error: "Server Down"
        })
    }
}

exports.deleteCategories = async(req,res) => {

    try {
        const id = req.params.id
        const category = await Category.findByPk(id);
        if (!category) {
            return res.status(500).json({
            message : 'fail',
            error: "id tidak ditemukan"
        })
        }
        await Category.destroy({
            where: {
                id: id,
            },
        });
        return res.status(200).json({
            status : "succes",
            message:"Data Berhasil Dihapus"
        })
        
    } catch (error) {
         return res.status(500).json({
            message : 'fail',
            error: "Server Down"
        })
    }
    
}