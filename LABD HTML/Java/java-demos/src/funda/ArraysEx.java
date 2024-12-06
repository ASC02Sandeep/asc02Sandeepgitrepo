package funda;

public class ArraysEx {
    private void primitiveArray(){
        int[] intArray = new int[5];
        intArray[0] = 10;
        intArray[1] = 20;
        intArray[2] = 30;
        intArray[3] = 40;
        intArray[4] = 50;
        for(int i=0; i<intArray.length; i++){
            System.out.println("intArray[" + i + "] = " + intArray[i]);
        }
    }
    public static void main(String[] args){
        ArraysEx arrayEx = new ArraysEx();
        arrayEx.primitiveArray();
    }
}
