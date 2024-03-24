import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className='md:w-1/3 ml-4'>
            <div className='bg-gray-200 p-4 rounded-lg mb-4'>
                <h3 className='text-3xl font-semibold text-center text-blue-500'>Spent time on read: {readingTime}</h3>
            </div>

            <div className='bg-gray-200 p-2 rounded-xl'>
                <h2 className='text-3xl font-semibold text-center m-3'>Bookmark Blogs:   {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark,idx) => <Bookmark key={idx
                    } bookmark={bookmark}></Bookmark>)
                }
        </div>
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks:PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;