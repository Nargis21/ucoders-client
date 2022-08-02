import React from 'react';
import html from '../../images/html.png'
import css from '../../images/css.png'
import javascript from '../../images/javascript.png'
import react from '../../images/react.png'
import node from '../../images/node1.png'
import { Link } from 'react-router-dom';

const LessonRow = ({ content, index, refetch, setDeleteConfirm }) => {

    return (
        <div>
            <div class="card break-all bg-slate-200 shadow-xl">
                <div class="card-body">
                    <div className='flex flex-col justify-center items-center'>
                        {content.type === 'html' && <img width={'100px'} src={html} alt="" />}
                        {content.type === 'css' && <img width={'100px'} src={css} alt="" />}
                        {content.type === 'javascript' && <img width={'100px'} src={javascript} alt="" />}
                        {content.type === 'react' && <img width={'100px'} src={react} alt="" />}
                        {content.type === 'node' && <img width={'100px'} src={node} alt="" />}
                        <h2 class="card-title text-2xl font-bold">{content.lesson}</h2>
                    </div>
                    <div class="flex items-center justify-between">
                        {content.type === 'html' && <Link to='/html' className='btn btn-link' >Learn More</Link>}
                        {content.type === 'css' && <Link to='/css' className='btn btn-link' >Learn More</Link>}
                        {content.type === 'javascript' && <Link to='/javascript' className='btn btn-link' >Learn More</Link>}
                        {content.type === 'react' && <Link to='/react' className='btn btn-link' >Learn More</Link>}
                        {content.type === 'node' && <Link to='/node' className='btn btn-link' >Learn More</Link>}

                        <label onClick={() => setDeleteConfirm(content)} for="delete-lesson-modal" class="btn bg-red-500 border-0 btn-sm modal-button">Remove</label>
                    </div>
                </div>
            </div>
        </div>

        // <tr>
        //     <th>{index + 1}</th>
        //     <td>{content.lesson}</td>
        //     <td>
        //         <label onClick={() => setDeleteConfirm(content)} for="delete-lesson-modal" class="btn bg-red-500 border-0 btn-sm modal-button">Delete</label>
        //     </td>
        // </tr>

    );
};

export default LessonRow