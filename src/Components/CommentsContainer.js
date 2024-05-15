import React from 'react'

const commentData = [
    {
        name: 'Abhishek',
        comment: 'Hi.. How Are You?',
        replies:[
            {
                name: 'Abhi',
                comment: 'Hi.. Fine',
                replies:[
                    {
                        name: 'AbhiShek',
                        comment: 'ok',
                        replies:[
                            
                        ]
                    },
                ]
            },
        ]
    },
    {
        name: 'Abhishek',
        comment: 'Hi.. How Are You?',
        replies:[
            {
                name: 'Abhi',
                comment: 'ok',
                replies:[
                    
                ]
            },
        ]
    },
    {
        name: 'Abhishek',
        comment: 'Hi.. How Are You?',
        replies:[]
    },
    {
        name: 'Abhishek',
        comment: 'Hi.. How Are You?',
        replies:[
            {
                name: 'Abhi',
                comment: 'ok',
                replies:[
                    
                ]
            },
        ]
    }
]

const Comment = ({data}) =>{
    const {name, comment, replies} = data
return(
    <>
    <div className='flex p-2 my-3 bg-gray-50 rounded-lg shadow-md'>
        <img className='h-10 w-10' alt='User-Photo' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png'/>
         <div className='px-4'>
            <p className='font-bold'>{name}</p>
            <p>{comment}</p>
         </div>
    </div>
    </>
)
}

const CommentList = ({comments}) => comments.map((comment, index)=> {
    return <div key={index} >
    <Comment data={comment}/>
    <div className='pl-5 border-l ml-5'>
     <CommentList comments={comment.replies}/>
    </div>
    </div>
}
)

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='font-bold text-2xl'> {commentData?.length} Comments</h1>
        <div>
            <CommentList comments={commentData}/>
        </div>
    </div>
  )
}

export default CommentsContainer