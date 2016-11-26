import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
};

const tilesData = [
  {
    img: '//www.baidu.com/img/bd_logo1.png',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: '//www.baidu.com/img/bd_logo1.png',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: '//www.baidu.com/img/bd_logo1.png',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: '//www.baidu.com/img/bd_logo1.png',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: '//www.baidu.com/img/bd_logo1.png',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: '//www.baidu.com/img/bd_logo1.png',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: '//www.baidu.com/img/bd_logo1.png',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: '//www.baidu.com/img/bd_logo1.png',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
const GridListExampleSingleLine = () => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {tilesData.map((tile,i) => (
        <GridTile
          key={tile.title}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSingleLine;