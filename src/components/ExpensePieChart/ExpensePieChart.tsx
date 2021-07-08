import React, {useContext} from 'react';
import {View, processColor, StyleSheet} from 'react-native';
import {PieChart} from 'react-native-charts-wrapper';
import {ThemeContext} from '~context/ThemeCotext';
import {useAppSelector} from '~redux/reduxhooks';
import {colors, hp, modifiedExpenseArray} from '~utils';

const ExpensePieChart = () => {
  const {walletTransactions} = useAppSelector(state => state.wallet.data);
  const {symbol} = useAppSelector(state => state.user);

  const {theme} = useContext(ThemeContext);

  const expenseData = modifiedExpenseArray(walletTransactions, symbol);

  return (
    <View style={{flex: 1}}>
      <PieChart
        style={styles.chart}
        logEnabled={true}
        dragDecelerationEnabled={true}
        //dragDecelerationFrictionCoef={20}
        chartBackgroundColor={
          theme.type === 'dark'
            ? processColor(colors.BLACK)
            : processColor(colors.WHITE)
        }
        chartDescription={{
          //text: 'hello',
          textSize: 15,
          textColor: processColor(colors.SECONDARY),
        }}
        data={{
          dataSets: [
            {
              values: expenseData,
              label: '',
              config: {
                colors: [
                  processColor('#C0FF8C'),
                  processColor('#FFF78C'),
                  processColor('#FFD08C'),
                  processColor('#8CEAFF'),
                  processColor('#FF8C9D'),
                ],
                //valueTextSize: 10,
                valueTextColor: processColor(colors.WARNING),
                sliceSpace: 5,
                selectionShift: 60,
                valueFormatter: "#.#'%'",
                valueLineColor: processColor(colors.WARNING),
                valueLinePart1Length: 0.5,
              },
            },
          ],
        }}
        legend={{
          enabled: true,
          textColor:
            theme.type === 'dark'
              ? processColor(colors.WHITE)
              : processColor(colors.BLACK),
          textSize: 15,
          form: 'CIRCLE',
          horizontalAlignment: 'RIGHT',
          verticalAlignment: 'BOTTOM',
          orientation: 'HORIZONTAL',
          wordWrapEnabled: true,
          formToTextSpace: 5,
        }}
        highlights={[{x: 2}]}
        extraOffsets={{left: 5, top: 5, right: 5, bottom: 5}}
        entryLabelColor={processColor('green')}
        entryLabelTextSize={10}
        entryLabelFontFamily={'HelveticaNeue-Medium'}
        drawEntryLabels={true}
        rotationEnabled={true}
        rotationAngle={45}
        usePercentValues={true}
        styledCenterText={{
          text: 'Expenses',
          color: processColor(colors.SECONDARY),
          fontFamily: 'HelveticaNeue-Medium',
          size: 20,
        }}
        centerTextRadiusPercent={100}
        holeRadius={30}
        holeColor={processColor('#f0f0f0')}
        transparentCircleRadius={45}
        transparentCircleColor={processColor('#f0f0f088')}
        maxAngle={350}
        onChange={event => console.log(event.nativeEvent)}
      />
    </View>
  );
};

export default ExpensePieChart;

const styles = StyleSheet.create({
  chart: {
    flex: 1,
  },
});
