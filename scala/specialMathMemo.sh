#!/bin/sh
exec scala "$0" "$@"
!#

/** 
  * Runnable script for a special math function.
  * 
  * Accepts a single run time input and calculates a result.
  * This foregoes input validation but leverages memoization to
  * increase performance.
  *
  * author: Brian Nash
  */

import scala.collection.mutable

// found memoize function to handle generic memoizaiton that also works
// for recursion
def memoize[I, O](f: I => O): I => O = new mutable.HashMap[I, O]() {
  override def apply(key: I) = getOrElseUpdate(key, f(key))
}

lazy val specialMath: Int => BigInt = memoize {
  case 0 => 0
  case 1 => 1
  case n => n + specialMath(n-1) + specialMath(n-2)
}

if (args.length > 0) {
  // val started = System.currentTimeMillis()
  val int = args(0).trim.toInt
  val result = specialMath(int)
  println(result)
  // val ended = System.currentTimeMillis()
  // println(s"executed in ${ended - started}ms")
}