<?php

$length = 5;
$width = 2;

$area = $length * $width;

$perimeter = 2 * ($length + $width);

echo "Area: $area <br>";
print ("Perimeter: $perimeter <br>");

$amount = 500;
$vat = 0.15 * $amount;

echo "VAT: $vat <br>";

$num = 10;

if($num % 2 == 0)
{
    echo "$num is even <br>";
}
else {
    echo "$num is odd <br>";
}

$n1 = 10; $n2 = 20; $n3 = 30;

if ($n1 >= $n2 && $n1 >= $n3)
{
    echo "Largest Number: $n1";
}

elseif ($n2 >= $n1 && $n2 >= $n3)
{
    echo "Largest Number: $n2";
}
else {
    echo "Largest Number: $n3";
}
echo "<br>";
for ($i=11; $i < 100; $i = $i+2)
{
    echo "$i &nbsp;";
}
echo "<br>";

$array = [2, 4, 6, 8];
$search = 6;
$found = false;

foreach ($array as $v)
{
    if($v == $search)
    {
        $found = true;
        break;
    }
}


if ($found = "true")
{
    echo "Number Found in Array <br>";

}

else {
    echo "Number Not Found in Array <br>";
}
for ($i = 1; $i <= 3; $i++)
{
    for ($j = 1; $j <= $i; $j++)
    {
        echo "*";
    }

    echo "<br>";
}

for ($i = 1; $i <= 3; $i++)
{
    for ($j = 1; $j <= $i; $j++)
    {
        echo $j;
    }
    echo "<br>";
}

$arr2D =[
    [1], [2], [3], ["A"],
    [1], [2], ["B"], ["C"],
    [1], ["D"], ["E"], ["F"]
];

?>