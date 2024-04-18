import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTurnUp, faStar } from "@fortawesome/free-solid-svg-icons";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";
import CoinItem from './CoinItem'
import Accordion from '../toggle/toggle';
import { useAppProvider } from '../AppContext';
import { Container } from 'postcss';
import { dark } from '@material-ui/core/styles/createPalette';


function Coins({ coins }) {

    const [searchText, setSearchText] = useState("")
    const [page, setPage] = useState(1);

    const [TableData, setTableData] = useState([])

    const useStyles = makeStyles({
        row: {
            backgroundColor: "#16171a",
            cursor: "pointer",
            "&:hover": {
                backgroundColor: "#131111",
            },
            fontFamily: "Montserrat",
        },
        pagination: {
            "& .MuiPaginationItem-root": {
                // color: "#eee",
            },
        },
    });

    const classes = useStyles();

    const handleSearch = () => {
        return coins.filter(
            (coin) =>
                coin.name.toLowerCase().includes(searchText) ||
                coin.symbol.toLowerCase().includes(searchText)
        );
    };

    useEffect(() => {
        
        axios("https://rollupradar.xyz/")
        .then((res)=>{
           
            if(res.status == 200){
                console.log(res.data.data);
                setTableData(res.data.data);
            }
        })
    }, [])
    


    return (
        <div>
            <div className='rounded-div'>
            <div className='sm:hidden'>
                    <div className='border-b dark:border-opacity-12'>
                        <nav className='flex space-x-8'>
                            <a href='javascript:void(0);' className='rounded-a text-sm font-medium border-b-2 border-transparent py-3'>
                                <FontAwesomeIcon className='mr-1' icon={faStar} style={{ color: '#5ac8fa' }} /> Listed Rollups | 4,057
                            </a>
                            <a href='javascript:void(0);' className='rounded-a py-3 text-sm font-medium border-b-2 border-transparent'>코인</a>
                            <a href='javascript:void(0);' className='rounded-a py-3 text-sm font-medium border-b-2 border-transparent'>신규 코인</a>
                            <a href='javascript:void(0);' className='rounded-a py-3 text-sm font-medium border-b-2 border-transparent'>수익률 상/하위</a>
                            <a href='javascript:void(0);' className='rounded-a py-3 text-sm font-medium border-b-2 border-transparent'>카테고리</a>
                            <a href='javascript:void(0);' className='rounded-a py-3 text-sm font-medium border-b-2 border-transparent'>Solana</a>
                            <a href='javascript:void(0);' className='rounded-a py-3 text-sm font-medium border-b-2 border-transparent'>Avalanche</a>
                        </nav>
                    </div>
                </div>

                <div className='home-section my-4'>
                    <p className='text-sm font-normal text-gray-500 dark:text-0.8'>Listed Rollups <span className='text-green-500'>5,067 <FontAwesomeIcon icon={faTurnUp} /></span> Live Rollups 3,068 </p>
                    
                </div>

                <div className='flex justify-end my-3 border-t'>
                    <input onChange={(e) => setSearchText(e.target.value)} type="text" className='bg-gray-100 dark:bg-gray-600 rounded-md py-1 indent-3 outline-none my-5' placeholder='Search Rollups...' />
                </div>

               

                <div className='relative'>
                    <div className='overflow-x-auto'>
                        <table className='w-full border-collapse text-center'>
                            <thead className='dark:text-white h-11 dark:bg-181818 '>
                                <tr className='border-b border-t'>
                                  
                                    <th className='text-sm dark:text-hsla-dark whitespace-nowrap'>🥇</th>
                                    <th className='text-left text-sm dark:text-hsla-dark whitespace-nowrap'><button className='text-xs px-3 py-1 bg-slate-700 rounded-lg'>🚀 Rollups</button></th>
                                   
                                    <th className='text-sm dark:text-hsla-dark whitespace-nowrap'>👨🏻‍💻Status</th>
                                    <th className='text-sm dark:text-hsla-dark w-17 whitespace-nowrap'>🗂️Stack</th>
                                    <th className='text-sm dark:text-hsla-dark w-17 whitespace-nowrap'>📊TVL</th>
                                    <th className='text-sm dark:text-hsla-dark whitespace-nowrap'>🔗 RPC</th>
                                    <th className='text-sm dark:text-hsla-dark whitespace-nowrap'>🌉Bridge</th>
                                    <th className='text-sm dark:text-hsla-dark w-17 whitespace-nowrap'><button className='text-xs px-3 py-1 bg-slate-700 rounded-lg'>구독</button>🌐Github</th>
                                </tr>
                            </thead>
                            <tbody className='dark:text-white'>
                                {
                                    TableData.map((ele)=>{
                                        return(
                                            <tr  className='h-[75px] border-b overflow-hidden'>
                                                 <td className='w-40 text-sm py-1 px-2'>{ele.id}</td>
                                                 <td className='w-40 text-sm py-1 px-2'>{ele.Rollup}</td>
                                                 <td className='w-40 text-sm py-1 px-2'>{ele.Status}</td>
                                                 <td className='w-40 text-sm py-1 px-2'>{ele.Stack}</td>
                                                 <td className='w-40 text-sm py-1 px-2'>{ele.TVL}</td>
                                                 <td className='w-40 text-sm py-1 px-2'> <a target='_blank' href={"http://"+ele.RPC}>{ele.RPC}</a> </td>
                                                 <td className='w-40 text-sm py-1 px-2'> <a target='_blank' href={"http://"+ele.Bridge}>{ele.Bridge}</a> </td>
                                                 <td className='w-40 text-sm py-1 px-2'> <a target='_blank' href={"http://"+ele.Github}>{ele.Github}</a> </td>
                                              
                                          </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

          
        </div>

    );
}

export default Coins