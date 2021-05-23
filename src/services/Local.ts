import AsyncStorage from '@react-native-async-storage/async-storage'

export class LocalServices {
  public async saveImage (image: string): Promise<boolean> {
    const blobImage = new Blob([image], { type: 'image' })

    const jsonImage = JSON.stringify(blobImage)

    try {
      await AsyncStorage.setItem('ProfileImage', jsonImage)
      return true
    } catch (error) {
      return false
    }
  }
}
