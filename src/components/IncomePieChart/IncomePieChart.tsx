import React, {useContext, useMemo} from 'react';
import {View, processColor, StyleSheet, Text} from 'react-native';
import {PieChart} from 'react-native-charts-wrapper';
import {ThemeContext} from '~context/ThemeCotext';
import {useAppSelector} from '~redux/reduxhooks';
import {colors, hp, modifiedIncomeArray} from '~utils';
import {ChartAnime} from '~components';

const IncomePieChart = () => {
  const {walletTransactions} = useAppSelector(state => state.wallet.data);
  const {symbol} = useAppSelector(state => state.user);

  const {theme} = useContext(ThemeContext);

  const incomeData = modifiedIncomeArray(walletTransactions, symbol);

  const income = useMemo(() => {
    const incomeData = modifiedIncomeArray(walletTransactions, symbol);
    return incomeData;
  }, [walletTransactions]);

  return (
    <View style={{flex: 1}}>
      {incomeData ? (
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
                values: income,
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
            horizontalAlignment: 'LEFT',
            verticalAlignment: 'TOP',
            orientation: 'VERTICAL',
            wordWrapEnabled: true,
            formToTextSpace: 5,
          }}
          highlights={[{x: 2}]}
          entryLabelColor={processColor('green')}
          entryLabelTextSize={10}
          drawEntryLabels={true}
          rotationEnabled={true}
          rotationAngle={45}
          usePercentValues={true}
          styledCenterText={{
            text: 'Income',
            color: processColor(colors.PRIMARY),
            size: 17,
          }}
          centerTextRadiusPercent={100}
          holeRadius={30}
          holeColor={processColor('#f0f0f0')}
          transparentCircleRadius={45}
          transparentCircleColor={processColor('#f0f0f088')}
          maxAngle={350}
          onChange={event => console.log(event.nativeEvent)}
        />
      ) : (
        <ChartAnime />
      )}
    </View>
  );
};

export default IncomePieChart;

const styles = StyleSheet.create({
  chart: {
    flex: 1,
  },
});
