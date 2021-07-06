// Convert.scala
// Simple string conversion to Base64.
//
// Author: Brian Nash
import java.nio.charset.StandardCharsets

object Convert {
  def main(args: Array[String]): Unit = {

    /** Determines if args are available
      *
      * @param args Run-time arguments
      * @return evalation of status of args being present
      */
    def hasArgs: Boolean = args.length == 1

    try {
      if (hasArgs) {
        val byteEncoded = args(0).trim.getBytes(StandardCharsets.UTF_8)
        val encoded = java.util.Base64.getEncoder.encodeToString(byteEncoded)
        println(s"Base64 encoded result: $encoded")
      } else {
        println("No input to encode")
      }
    } catch {
      case npe: NullPointerException =>
        println("Invalid string for encoding")
      case _: Throwable => println("Unknown issue converting string")
    }
  }
}
