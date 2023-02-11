import { TableCell, TableRow } from '@mui/material';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

// const InnerPlugin = (props) => {
//   const { id, itemInformation, pluginModelId } = props;
//   //   console.log(props);
//   const [innerPlugin, setInnerPlugin] = useState([]);
//   const params = useParams();
//   //   setInnerPlugin(props);
//   //   console.log(innerPlugin);

//   //   const itemPlugin = innerPlugin.find((i) => i.pluginModelId == params.id);
//   //   console.log(pluginModelId);

// //   return (
// //     // <>
// //     //   {/* {itemPlugin != undefined && ( */}
// //     //   <TableRow>
// //     //     <TableCell align="left"> IDIDI</TableCell>

// //     //     <TableCell width={700} align="center">
// //     //       {/* {itemPlugin.itemInformation} */}
// //     //     </TableCell>
// //     //     <TableCell align="center">
// //     //       <Button>Редактировать</Button>
// //     //       <Button style={{ marginLeft: 20 }} variant="danger">
// //     //         Удалить
// //     //       </Button>{' '}
// //     //     </TableCell>
// //     //   </TableRow>
// //     //   {/* )} */}
// //     // </>
// //   //);
// // };

// export default InnerPlugin;
