const {BookModel, UserModel} = require("../models");

exports.getAllBooks = async (req,res) => {
    const books = await BookModel.find();

    if(books.length ===0)
        return res.status(404).json({
            success: false,
            message: "No book found",
        });

    res.status(200).json({
        success: true,
        data: books,
    }) 
};

exports.getSingleBookById = async (req,res)=>{
    const {id} =req.params;

    const book = await BookModel.findById(id);

    if(!book){
        return res.status(404).json({
            success: false,
            message : "Book not found"
                });
    }

    return res.status(200).json({
        success: true,
        data: book,
    });
};

exports.getAllIssuedBooks = async (req,res)=>{
    const userWithIssuedBooks = users.filter((each) =>{
         if(each.issuedBook) return each;  
    });
    const issuedBooks = [];
    userWithIssuedBooks.forEach((each)=>{
        const book = books.find((book)=> book.id=== each.issuedBook);

        book.issuedBy = each.name;
        book.issuedDate = each.issuedDate;
        book.returnDate = each.returnDate;

        issuedBooks.push(book);

    });
    if(issuedBooks.length ==0)
        return res.status(404).json({
            success : false,
            message:"no books issued yet",
        });

    return res.status(200).json({
        success: true,
        data: issuedBooks,
    });

}

