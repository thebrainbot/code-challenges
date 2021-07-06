object SpecialMath {

  /** Runnable script for a special math function.
    *
    * Accepts a single run time input and calculates a result.
    * Does some basic error handling and input validation.
    * 
    * Example: `scala SpecialMath.scala 90` results in 19740274219868223074
    * 
    * author: Brian Nash
    */
  def factor(n: Int): Int = n match {
    case 0 => 0
    case 1 => 1
    case _ => n + factor(n - 1) + factor(n - 2)
  }

  def main(args: Array[String]): Unit = {
    try {
      if (args.length > 0) {
        // val started = System.currentTimeMillis()
        val result = factor(args(0).trim.toInt)
        // val ended = System.currentTimeMillis()
        println(result)
        // println(s"executed in ${ended - started}ms")
      }
    } catch {
      case e: Exception => println("Invalid input")
    }
  }
}
